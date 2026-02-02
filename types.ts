export interface ScrollState {
  velocity: number;
  progress: number;
}

export interface SectionProps {
  className?: string;
}

export interface Artwork {
  id: number;
  title: string;
  year: string;
  artist: string;
  imgUrl: string;
}