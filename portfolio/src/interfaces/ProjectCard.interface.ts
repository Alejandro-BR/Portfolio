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
  title: string;
  description: string;
  images: string[];
  techs: Tech[];
  links: ProjectLinks;
}