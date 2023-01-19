import c from 'classnames';

interface HabitDayProps {
  disabled?: boolean;
}

export default function HabitDay({ disabled }: HabitDayProps) {
  return (
    <div
      className={c(
        'w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg',
        {
          ['opacity-40 cursor-not-allowed']: disabled,
        },
      )}
    ></div>
  );
}
