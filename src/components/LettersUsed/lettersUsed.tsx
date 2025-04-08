import styles from './styles.module.css';
import  Letter  from '../Letter/letter'

export type LetterUsedProps = {
    value: string;
    correct: boolean;
}

type Props = {
    data: LetterUsedProps[]
}
export default function LettersUsed({ data }: Props) {
    return (
        <div className={styles.lettersUsed}>
            <h5>Letras já utilizadas</h5>
            <div>
                {
                    data.map(({ value, correct }) =>  (
                        <Letter key={value} value={value} size="small" color={correct ? "correct" : "wrong"}/>
                    ))
                }

            </div>
        </div>
    );
}