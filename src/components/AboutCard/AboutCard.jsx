import React from 'react';


export default function AboutCard({ aboutSection }) {
    return (
            <div>
                <div className="p-6">
                    <div className="text-4xl mb-4">{aboutSection.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{aboutSection.title}</h3>
                    <p className="text-gray-400 hover:text-orange-400">{aboutSection.description}</p>
                </div>
            </div>
    )
}