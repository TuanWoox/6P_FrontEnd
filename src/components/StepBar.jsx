import React from 'react';
import { Fragment } from 'react';
function StepBar({ StepBars, activeStep }) {
    const numberOfNodes = StepBars.length;
    return (
        <>
            {StepBars.map((stepBar, index) => (
                <Fragment key={index}>
                    <div className="flex items-center flex-col">
                        <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center 
                                ${index <= activeStep ? 'bg-[#95C475] ' : 'bg-gray-300'}`}
                        >
                            <span className="text-white">{stepBar.number}</span>
                        </div>
                        <span className="text-sm mt-1">{stepBar.text}</span>
                    </div>
                    {index < numberOfNodes - 1 && (
                        <div className="relative flex-grow mx-2">
                        {/* Base gray line */}
                        <div className="h-1 w-full bg-gray-300 absolute"></div>
                        
                        {/* Animated green overlay */}
                        <div 
                          className="h-1 bg-[#95C475] absolute transition-all duration-700 ease-out"
                          style={{
                            width: index < activeStep ? '100%' : '0%'
                          }}
                        />
                      </div>
                    )}
                </Fragment>
            ))}
        </>
    )
}
export default StepBar