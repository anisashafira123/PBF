import { useState } from "react";

export default function Form(){
    const [jawaban, setJawaban] = useState('');
    const [eror, setEror] = useState (null);
    const [status, setStatus] = useState('typing');

    if (status === 'succes') {
        return <h1>Yay...Jawaban Benar!</h1>
    }
    async function handleSubmit(e: {preventDefault: () => void; }) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(jawaban);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setEror(err);
        }
    }
    function handleTextareaChange(e) {
        setJawaban(e.target.value);
    }

    return (
        <>
        <div className="w-full max-w-xs">
            <h2>Tebak nama Hewan</h2>
            <p>Hewan apa yang ditakuti oleh Doraemon?</p>
            <form
            className="shadow-md rounded px-8 pt-6 pb-8 mb-4 text-black border-gray-400"
            onSubmit={handleSubmit}>
            <textarea
            value={jawaban}
            onChange={handleTextareaChange}
            disabled={status === 'submitting'}
            />
            <br />
            <button
                className="bg-blue-400 p-2 m-2 rounded text-sm text-white"
                disabled={jawaban.length === 0 || status === 'submitting'}>
                    Submit
                </button>
                {eror !== null && <p className="Eror text-red-500 text-sm">{error.message}</p>}
            </form>
        </div>
        </>
    )
}

function submitForm(jawaban) {
    return new Promise<void>((resolve,reject) => {
        setTimeout(() =>{
            let shouldError = jawaban.toLowerCase() !== 'tikus'
            if (shouldError) {
                reject(new Error('Tebakan yang bagus tetapi jawab salah. Silahkan coba lagi'));
            } else {
                resolve();
            }
        }, 500);
    });
}


export function Form_2() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    //const [fullName, setFullName] = useState('');
    const fullName =firstName+ ' '+lastName;

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
        //setFullName(e.target.value + ' ' + lastName);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
        //setFullName(firstName + ' ' + e.target.value);
    }

    return (
        <>
            <h2>Silahkan nama lengkap anda</h2>
            <label className="block w-full m-2">
                Nama depan:{' '}
                <input
                className="text-sm text-black ml-2 rounded"
                    value={firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label className="block w-full m-2">
                Nama belakang:{' '}
                <input
                className="text-sm text-black ml-2 rounded"
                    value={lastName}
                    onChange={handleLastNameChange}
                />
            </label>
            <p>
                Nama lengkap Anda adalah : <b className="text-blue-600">{fullName}</b>
            </p>
        </>
    );
}