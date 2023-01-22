import * as Popover from '@radix-ui/react-popover';
import c from 'classnames';
import ProgressBar from './ProgressBar';

interface HabitDayProps {
  disabled?: boolean;
}

export default function HabitDay({ disabled }: HabitDayProps) {
  return (
    <Popover.Root>
      <Popover.Trigger
        className={c(
          'w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg',
          {
            ['opacity-40 cursor-not-allowed']: disabled,
          },
        )}
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">terça-feira</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            17/01
          </span>

          <ProgressBar progress={75} />

          <Popover.Arrow height={8} width={16} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
