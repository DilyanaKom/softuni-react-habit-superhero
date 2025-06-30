import { useEffect, useState } from "react";
import { get } from "../utils/request";

const url = 'https://habit-superhero.onrender.com/data/challenges';

export const useProfileData = (userId = null) => {
    const [createdChallenges, setCreatedChallenges] = useState([]);
    const [activeChallenges, setActiveChallenges] = useState([]);
    const [completedChallenges, setCompletedChallenges] = useState([]);

    const refetchChallenges = () => {
        const searchParams = new URLSearchParams({
            where: `_ownerId="${userId}"`,

        });
        get(`${url}?${searchParams.toString()}`)
            .then(result => {
                setCreatedChallenges(result)
            });
            
        get(url)
            .then(result => {
                const filteredActive = result.filter(
                    challenge => challenge.activeParticipants?.includes(userId)
                );
                const filteredCompleted = result.filter(
                    challenge => challenge.completedBy?.includes(userId)
                );
                setActiveChallenges(filteredActive);
                setCompletedChallenges(filteredCompleted);
            });
    };

    useEffect(() => {
        refetchChallenges()
    }, [userId])

    return {
        createdChallenges,
        activeChallenges,
        completedChallenges,
        refetchChallenges
    }
}








