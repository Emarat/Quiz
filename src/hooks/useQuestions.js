import { get, getDatabase, onValue, query, ref } from 'firebase/database';
import { useEffect, useState } from 'react';


const useQuestions = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {

        const handleQuestions = async () => {

            const db = getDatabase();
            const quizRef = ref(db, 'quiz/' + '/questions');
            const quizQuery = query(quizRef);

            try {
                setError(false);
                setLoading(true);
                // request firebase database
                const snapshot = await get(quizQuery);
                setLoading(false);
                if (snapshot.exists()) {
                    setQuestions(() => {
                        return [...Object.values(snapshot.val())];
                    });
                }
            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }


        }
        handleQuestions();
    }, [])

    return {
        questions,
        loading,
        error
    };

}

export default useQuestions;