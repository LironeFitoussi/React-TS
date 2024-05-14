import CourseGoal from './CourseGoal';
import { type CourseGoal as CGoal} from '../App';
import InfoBox from './InfoBox';
import { ReactNode } from 'react';

type CourseGoalsListProps = {
    goals: CGoal[]
    onDeleteGoal: (id: number) => void
}

export default function CourseGoalsList({goals, onDeleteGoal}: CourseGoalsListProps) {
    if (goals.length === 0) {
        return (
            <InfoBox mode="hint">
                No goals found. Maybe add one?
            </InfoBox>
        );
    }
    
    let warningBox: ReactNode;

    if (goals.length >= 4) {
        warningBox = (
            <InfoBox mode="warning" severity={
                goals.length >= 8 ? 'high' :  
                goals.length >= 6 ? 'medium' : 
                'low'
            }>
                You have a lot of goals. Consider removing some of them.
            </InfoBox>
        );
    }
    return (
        <>
            {warningBox}
            <ul>
                {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
                    {goal.description}
                    </CourseGoal>
                </li>
                ))}
            </ul>
        </>
        
    );
}