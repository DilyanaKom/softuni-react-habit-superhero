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
    if (!challengeId){
        return;
    };
    const searchParams = new URLSearchParams({
        load: `author=_ownerId:users`,
    });

    const getChallenge = async() => {
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


    return {
        challenges,   
        currentChallenge,
        addChallenge,
        editChallenge,
        deleteChallenge
    }
}