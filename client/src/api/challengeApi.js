import { useEffect, useState } from "react";
import { get, patch, post, remove } from "../utils/request";

const url = 'http://localhost:3030/data/challenges';

export const useChallenges = (challengeId = null) => {
    const [challenges, setChallenges] = useState([]);
    const [currentChallenge, setCurrentChallenge] = useState(null);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            load: `author=_ownerId:users`,
        })
        const getAllChallenges = async () => {
            try {
                const data = await get(`${url}?${searchParams.toString()}`);
                setChallenges(data);

            } catch (error) {
                console.log(error.message)
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

            }
        }

        getChallenge();
    }, [challengeId]);


    const addChallenge = async (challengeData) => {
        try {
            return await post(url, challengeData);

        } catch (error) {
            console.log(error.message);
            throw error;
        }
    };

    const editChallenge = async (challengeId, challengeData) => {
        try {
            await patch(`${url}/${challengeId}`, challengeData);

        } catch (error) {
            throw error;
        }

    };

    const deleteChallenge = async (challengeId) => {

        try {
            await remove(`${url}/${challengeId}`);
        } catch (error) {
            throw error;
        }

    }

    const joinChallenge = async (userId) => {
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
            console.log(error.message)
        }
    }
    
    const completeChallenge = async (userId) => {
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
            console.log(error.message)
        }
    }


    return {
        challenges,
        currentChallenge,
        addChallenge,
        editChallenge,
        deleteChallenge,
        joinChallenge,
        completeChallenge
    }
}