import { createContext, useContext, useReducer } from "react";

export type Timer = {
    name: string;
    duration: number;
};

type TimersState = {
    isRunning: boolean;
    timers: Timer[];
};

const initialState: TimersState = {
    isRunning: false,
    timers: [],
};

type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void;
    startTimers: () => void;
    stopTimers: () => void;
    // removeTimer: (name: string) => void;
    // updateTimer: (name: string, duration: number) => void;
};

const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
    const ctx = useContext(TimersContext);

    if (ctx === null) {
        throw new Error('useTimersContext must be used within a TimersContextProvider');
    }

    return ctx;
}

type TimersContextProviderProps = {
    children: React.ReactNode;
};

type StratTimersAction = {
    type: 'START_TIMERS';
}

type StopTimersAction = {
    type: 'STOP_TIMERS';
}

type AddTimerAction = {
    type: 'ADD_TIMER';
    payload: Timer;
}

type Action = StratTimersAction | StopTimersAction | AddTimerAction;

function timersReducer(state: TimersState, action: Action): TimersState {
    switch (action.type) {
        case 'ADD_TIMER':
            return {
                ...state,
                timers: state.timers.concat(action.payload),
            };
        case 'START_TIMERS':
            return {
                ...state,
                isRunning: true,
            };
        case 'STOP_TIMERS':
            return {
                ...state,
                isRunning: false,
            };
        default:
            return state;
    }
}

export default function TimersContextProvider({ children }: TimersContextProviderProps) {
    const [timersState, dispatch] = useReducer(timersReducer, initialState);
    // console.log(timersState);
    
    const ctx: TimersContextValue = {
        timers: timersState.timers,
        isRunning: timersState.isRunning,
        addTimer: (timerData: Timer) => {
            // Add your implementation here
            dispatch({type: 'ADD_TIMER' , payload: timerData})
        },
        startTimers: () => {
            // Add your implementation here
            dispatch({type: 'START_TIMERS'})
        },
        stopTimers: () => {
            // Add your implementation here
            dispatch({type: 'STOP_TIMERS'})
        },
    };

    return (
        <TimersContext.Provider value={ctx}>
            {children}
        </TimersContext.Provider>
    );
}
