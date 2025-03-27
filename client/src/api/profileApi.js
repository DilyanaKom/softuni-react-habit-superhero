import { useContext, useEffect, useState } from "react";
import { get, patch, post, remove } from "../utils/request";
import { UserContext } from "../components/user/UserContext";

const url = 'http://localhost:3030/data/challenges';

export const useProfileData = (userId = null) => {
    const [createdChallenges, setCreatedChallenges] = useState([]);
    const [activeChallenges, setActiveChallenges] = useState([]);
    const [completedChallenges, setCompletedChallenges] = useState([]);

    useEffect(() => {
        const searchParams = new URLSearchParams({
            where: `_ownerId="${userId}"`,

        });
        get(`${url}?${searchParams}`)
            .then(result => {
                setCreatedChallenges(result)
            });
    }, [userId]);



    return {
        createdChallenges,
    }

}