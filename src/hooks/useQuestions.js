import { getDatabase, onValue, ref } from 'firebase/database';
import { useEffect, useState } from 'react';


const useQuestions = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {

        const handleQuestions = async () => {

            const db = getDatabase();
            const quizRef = ref(db, 'quiz/' + '/questions');
            onValue(quizRef, (snapshot) => {
                const data = snapshot.val();
                setQuestions(data);
            });
        }
        handleQuestions();
    }, [])

    return {
        questions
    };

}

export default useQuestions;