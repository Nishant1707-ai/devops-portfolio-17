import React, { useEffect, useState } from 'react';
import { Star, GitFork, ExternalLink, RefreshCw, AlertTriangle, FolderGit2 } from 'lucide-react';
import { GithubIcon } from '../Icons';
import { PERSONAL_INFO, PROJECTS_DATA } from '../../data/portfolioData';

interface RepoData {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

interface UserProfile {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
}

export const GitHubSection: React.FC = () => {
  const [repos, setRepos] = useState<RepoData[]>([]);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        setError(false);

        // Fetch user profile
        const profileRes = await fetch(`https://api.github.com/users/${PERSONAL_INFO.socials.githubUsername}`);
        if (!profileRes.ok) throw new Error('Failed to fetch profile');
        const profileData = await profileRes.json();
        setProfile(profileData);

        // Fetch user repos
        const reposRes = await fetch(
          `https://api.github.com/users/${PERSONAL_INFO.socials.githubUsername}/repos?sort=updated&per_page=6`
        );
        if (!reposRes.ok) throw new Error('Failed to fetch repos');
        const reposData = await reposRes.json();
        setRepos(reposData);
      } catch (err) {
        console.warn('GitHub API fetch failed or rate-limited. Falling back to local data.', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <section id="github" className="py-20 bg-[#060810] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs uppercase tracking-widest">
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Open Source Activity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            GitHub Repositories & Code
          </h2>
          <p className="text-sm sm:text-base text-slate-400 font-mono">
            Directly connected to GitHub profile <span className="text-cyan-400">@{PERSONAL_INFO.socials.githubUsername}</span>.
          </p>
        </div>

        {/* Loading Spinner State */}
        {loading && (
          <div className="text-center py-12 space-y-3 font-mono text-xs text-slate-400">
            <RefreshCw className="w-6 h-6 text-cyan-400 animate-spin mx-auto" />
            <p>Querying GitHub API v3 for @{PERSONAL_INFO.socials.githubUsername}...</p>
          </div>
        )}

        {/* Profile Card & Repos Grid */}
        {!loading && (
          <div className="space-y-8">
            {/* Top Profile Summary Bar */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-slate-950 border-2 border-cyan-400 p-0.5 overflow-hidden">
                  <img
                    src={profile?.avatar_url || `https://github.com/${PERSONAL_INFO.socials.githubUsername}.png`}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full rounded-full object-cover"
                    onError={(e) => {
                      // Fallback avatar icon if image fails
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-mono">{PERSONAL_INFO.name}</h3>
                  <a
                    href={PERSONAL_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1"
                  >
                    <span>@{PERSONAL_INFO.socials.githubUsername}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {profile && (
                <div className="flex items-center gap-6 font-mono text-xs text-slate-300">
                  <div className="text-center">
                    <div className="text-base font-bold text-cyan-400">{profile.public_repos}</div>
                    <div className="text-[11px] text-slate-500">Repositories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-base font-bold text-cyan-400">{profile.followers}</div>
                    <div className="text-[11px] text-slate-500">Followers</div>
                  </div>
                </div>
              )}

              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-slate-950 border border-cyan-500/40 text-cyan-400 hover:bg-cyan-950/50 font-mono text-xs font-bold transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)]"
              >
                Visit GitHub Profile →
              </a>
            </div>

            {/* Repos Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.length > 0
                ? repos.map((repo) => (
                    <div
                      key={repo.id}
                      className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4 shadow-lg"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-base font-bold text-cyan-300 hover:underline flex items-center gap-1.5 truncate"
                          >
                            <FolderGit2 className="w-4 h-4 text-cyan-400 shrink-0" />
                            <span className="truncate">{repo.name}</span>
                          </a>
                        </div>
                        <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                          {repo.description || 'Public DevOps repository.'}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                        {repo.language && (
                          <span className="flex items-center gap-1.5 text-cyan-400">
                            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                            {repo.language}
                          </span>
                        )}
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Star className="w-3.5 h-3.5 text-amber-400" /> {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork className="w-3.5 h-3.5 text-slate-400" /> {repo.forks_count}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                : /* Fallback Local Project Repositories */
                  PROJECTS_DATA.filter((p) => !p.isPlaceholder).map((p) => (
                    <div
                      key={p.id}
                      className="p-6 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4 shadow-lg"
                    >
                      <div className="space-y-2">
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-base font-bold text-cyan-300 hover:underline flex items-center gap-1.5"
                        >
                          <FolderGit2 className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{p.title}</span>
                        </a>
                        <p className="text-xs text-slate-300 line-clamp-2">{p.description}</p>
                      </div>

                      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                        <span className="text-cyan-400">{p.technologies[0]}</span>
                        <a
                          href={p.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-cyan-400 hover:underline flex items-center gap-1"
                        >
                          <span>Repository</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  ))}
            </div>

            {error && (
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-center font-mono text-xs text-slate-400 flex items-center justify-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Showing pre-configured repository listings (GitHub API rate-limit fallback).</span>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
