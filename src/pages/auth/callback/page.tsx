import { redirect } from "react-router-dom";
import { useEffect } from "react";

export default function AuthCallback() {
    useEffect(() => {
        const fetchAuth = async () => {
            try {
                const res = await fetch('/api/auth/me');
                if (res.ok) {
                    const user = await res.json();
                    // Збережіть користувача у стан або у локальне збереження
                    // Наприклад, localStorage.setItem('user', JSON.stringify(user));
                    redirect('/');
                } else {
                    redirect('/'); // або інша сторінка у випадку помилки
                }
            } catch (error) {
                console.error('Failed to fetch auth status:', error);
                redirect('/login'); // або інша сторінка у випадку помилки
            }
        };

        fetchAuth();
    }, );

    return <div>Loading...</div>;
}