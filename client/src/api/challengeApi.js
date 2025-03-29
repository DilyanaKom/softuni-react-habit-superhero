import { useEffect, useState } from "react";
import { get, patch, post, remove } from "../utils/request";
import { useErrorHandler } from "../hooks/errorHandler";

const url = 'http://localhost:3030/data/challenges';

export const useChallenges = (challengeId = null) => {
    const [challenges, setChallenges] = useState([]);
    const [currentChallenge, setCurrentChallenge] = useState(null);
    const [latestChallenges, setLatestChallenges] = useState(null);
    const { error, setError, clearError} = useErrorHandler();

    useEffect(() => {
        const searchParams = new URLSearchParams({
            load: `author=_ownerId:users`,
        })
        const getAllChallenges = async () => {
            try {
                const data = await get(`${url}?${searchParams.toString()}`);
                setChallenges(data);

            } catch (error) {
                setError(error.message || "Loading challenges failed.");
                throw error;
            }
        };
        getAllChallenges();
    }, []);

    useEffect(() => {
        if (!challengeId) {
            return;
        };
        const searchParams = new URLSearchParams({
            load: `author=_ownerId:users`,
        });

        const getChallenge = async () => {
            try {
                const challengeData = await get(`${url}/${challengeId}?${searchParams.toString()}`);
                setCurrentChallenge(challengeData);
            } catch (error) {
                setError(error.message || "Loading challenge failed.");
                throw error;
            }
        }

        getChallenge();
    }, [challengeId]);

    useEffect(()=>{
        const searchParams = new URLSearchParams({
            load: `author=_ownerId:users`,
            sortBy: '_createdOn desc',
            pageSize: 4,

        });

        const getLatestChallenges = async () => {
            try {
                const data = await get(`${url}?${searchParams.toString()}`);
                setLatestChallenges(data);
            } catch (error) {
                setError(error.message || "Loading challenges failed.");
                throw error;
            }
        };
        getLatestChallenges();

    }, []);


    const addChallenge = async (challengeData) => {
        try {
            return await post(url, challengeData);

        } catch (error) {
            setError(error.message || "Adding challenge failed.");
            throw error;
        }
    };

    const editChallenge = async (challengeId, challengeData) => {
        try {
            await patch(`${url}/${challengeId}`, challengeData);

        } catch (error) {
            setError(error.message || "Editing challenge failed.");
            throw error;
        }

    };

    const deleteChallenge = async (challengeId) => {

        try {
            await remove(`${url}/${challengeId}`);
        } catch (error) {
            setError(error.message || "Deleting challenge failed.");
            throw error;
        }

    }

    const joinChallenge = async (challengeId, userId) => {
        const searchParams = new URLSearchParams({
            select: 'activeParticipants',
        });

        const currentActiveResult = await get(`${url}/${challengeId}?${searchParams.toString()}`);
        const activeParticipants = currentActiveResult.activeParticipants || [];

        if (activeParticipants.includes(userId)) {
            console.log('Already joined')
            return;
        }
        const options = {
            headers: {
                "X-Admin": "",
            }
        };
        const data = {
            activeParticipants: [...activeParticipants, userId],
        };

        try {
            await patch(`${url}/${challengeId}`, data, options);
            setCurrentChallenge(previous => ({
                ...previous,
                activeParticipants: [...activeParticipants, userId]
            }));

        } catch (error) {
            setError(error.message || "Join challenge failed.");
            throw error;
        }
    }
    
    const completeChallenge = async (challengeId, userId) => {
        const searchParams = new URLSearchParams({
            select: 'completedBy,activeParticipants',
        });

        const result = await get(`${url}/${challengeId}?${searchParams.toString()}`);
        const completedByParticipants = result.completedBy || [];
        const activeParticipants = result.activeParticipants;
        console.log(activeParticipants);

        if (completedByParticipants.includes(userId)) {
            console.log('Already completed')
            return;
        }
        const options = {
            headers: {
                "X-Admin": "",
            }
        };

        const updatedActiveParticipants = activeParticipants.filter(id => id !==userId);

        const data = {
            completedBy: [...completedByParticipants, userId],
            activeParticipants: updatedActiveParticipants,
        };

        try {
            await patch(`${url}/${challengeId}`, data, options);
            setCurrentChallenge(previous => ({
                ...previous,
                completedBy: [...completedByParticipants, userId],
                activeParticipants: updatedActiveParticipants
            }));

        } catch (error) {
            setError(error.message || "Complete challenge failed.");
            throw error;
        }
    }


    return {
        challenges,
        currentChallenge,
        latestChallenges,
        error,
        clearError,
        addChallenge,
        editChallenge,
        deleteChallenge,
        joinChallenge,
        completeChallenge
    }
}

export const useChallengeParticipiaction = () => {
const {joinChallenge, completeChallenge} = useChallenges();

    const handleJoinChallenge = async (challengeId, userId) =>{
        await joinChallenge(challengeId, userId);
    };

    const handleCompleteChallenge = async (challengeId, userId) => {
        await completeChallenge(challengeId, userId);
    };

    return {
        handleJoinChallenge,
        handleCompleteChallenge,
    }
}