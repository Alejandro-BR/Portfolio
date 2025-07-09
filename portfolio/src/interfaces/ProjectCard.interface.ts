export interface Tech {
  name: string;
  icon: string;
}

export interface ProjectLinks {
  github?: string;
  demo?: string;
  npm?: string;
}

export interface ProjectCardInterface {
  slug?: string;
  title: string;
  description: string;
  images: string[];
  techs: Tech[];
  links: ProjectLinks;
  features?: string[];
  extraInfo?: string;
}