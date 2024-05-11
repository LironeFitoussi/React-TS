import CourseGoal from './CourseGoal';
import { type CourseGoal as CGoal} from '../App';
type CourseGoalsListProps = {
    goals: CGoal[]
    onDeleteGoal: (id: number) => void
}

export default function CourseGoalsList({goals, onDeleteGoal}: CourseGoalsListProps) {
    return (
        <div>
            <ul>
                {goals.map((goal) => (
                <li key={goal.id}>
                    <CourseGoal title={goal.title} id={goal.id} onDelete={onDeleteGoal}>
                    {goal.description}
                    </CourseGoal>
                </li>
                ))}
            </ul>
        </div>
        
    );
}