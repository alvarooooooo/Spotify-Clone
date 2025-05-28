import { useMemo } from 'react';

interface Props {
  songDurations: string[];
}

export const PlayListDuration: React.FC<Props> = ({ songDurations }) => {
  const secondsPerMin = 60;
  const minPerHour = 60;

  const toSeconds = (duration: string): number => {
    const [min, sec] = duration.split(':').map(Number);
    if (isNaN(min) || isNaN(sec)) {
      // Handle invalid input, for example:
      return 0; // or throw error, or skip filtering earlier
    }
    return min * secondsPerMin + sec;
  };

  const formatDuration = (seconds: number): string => {
    let minutes = Math.floor(seconds / secondsPerMin);
    const sec = seconds % secondsPerMin;

    if (minutes >= minPerHour) {
      const hours = Math.floor(minutes / minPerHour);
      minutes = minutes % minPerHour;

      return `${hours} h ${minutes} min`;
    }

    return `${minutes} min ${sec} sec`;
  };

  const totalSeconds: number = useMemo(() => {
    return songDurations.map(toSeconds).reduce((acc, curr) => acc + curr, 0);
  }, [songDurations]);

  const formattedText: string = useMemo(() => {
    return formatDuration(totalSeconds);
  }, [totalSeconds]);

  return <span>{formattedText}</span>;
};
