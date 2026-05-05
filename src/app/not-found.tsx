'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();

    const handleGoHome = () => {
        router.push('/homepage');
    };

    const handleGoBack = () => {
        if (typeof window !== 'undefined') {
            window.history?.back();
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
            <div className="text-center max-w-md">
                <h1 className="text-9xl font-bold text-primary opacity-20">404</h1>
                <h2 className="text-2xl font-heading font-medium text-foreground mb-2">Página no encontrada</h2>
                <p className="text-muted-foreground mb-8">
                    La página que buscas no existe o fue movida. Volvamos al inicio.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={handleGoBack}
                        className="px-6 py-3 bg-primary text-primary-foreground rounded-md font-heading font-semibold transition-all duration-300 hover:bg-primary/90 active:scale-95"
                    >
                        Volver atrás
                    </button>

                    <button
                        onClick={handleGoHome}
                        className="px-6 py-3 border border-border rounded-md font-heading font-semibold text-foreground transition-all duration-300 hover:bg-muted active:scale-95"
                    >
                        Ir al inicio
                    </button>
                </div>
            </div>
        </div>
    );
}