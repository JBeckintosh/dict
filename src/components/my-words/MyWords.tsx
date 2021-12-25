import React from 'react';
import useFetch from '../../hooks/useFetch';

function MyWords() {
    const { myWords, status } = useFetch('Not a real url');

    return (
        <>
            {myWords.map((word) => (
                <div>{word}</div>
            ))}
        </>
    )
}

export default MyWords
