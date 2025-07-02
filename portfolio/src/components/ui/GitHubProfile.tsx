import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type GitHubProfileProps = {
  username: string;
};

type GitHubUser = {
  login: string;
  html_url: string;
  avatar_url: string;
};

function GitHubProfile({ username }: GitHubProfileProps) {
  const [profile, setProfile] = useState<GitHubUser | null>(null);

  const { t } = useTranslation();

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data: GitHubUser) => setProfile(data))
      .catch((err) => console.error("Error fetching GitHub profile:", err));
  }, [username]);

  if (!profile) return null;

  return (
    <div className="flex items-center gap-4">
      <a
        href={profile.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:underline"
      >
        <img
          src={profile.avatar_url}
          alt={`${profile.login} avatar`}
          className="w-10 h-10 rounded-full border border-primary"
        />
        <div className="flex flex-col">
          <span className=" text-secondary">{profile.login}</span>
          <span className="text-xs">
            {t("footer.github.cta")}
          </span>
        </div>
      </a>
    </div>
  );
}

export default GitHubProfile;
