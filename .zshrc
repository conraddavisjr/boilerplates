# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="/Users/conraddavis/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="robbyrussell"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment one of the following lines to change the auto-update behavior
# zstyle ':omz:update' mode disabled  # disable automatic updates
# zstyle ':omz:update' mode auto      # update automatically without asking
# zstyle ':omz:update' mode reminder  # just remind me to update when it's time

# Uncomment the following line to change how often to auto-update (in days).
# zstyle ':omz:update' frequency 13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# You can also set it to another string to have that shown instead of the default red dots.
# e.g. COMPLETION_WAITING_DOTS="%F{yellow}waiting...%f"
# Caution: this setting can cause issues with multiline prompts in zsh < 5.7.1 (see #5765)
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='code'
# else
#   export EDITOR='code'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

export LESS=FRX
# git config --global pager.branch false

# Aliases
# =====================
# Open zsh Profile
alias zsh='cd ~ && code .zshrc'

# LS
alias l='ls -lah'
# alias for quickly listing a directory
alias l='ls -GF'
# alias for quickly listing a directory
alias ll='ls -lah -GF'
# alias for going back a directory
alias ..='cd ..'
# alias for going back two directory
alias ...='cd ../..'
alias ....='cd ../../..'
alias .....='cd ../../../..'

# alias for navigating to projects
alias lab='cd ~/projects/lab'
alias port='cd ~/projects/cdj-website'

#alias for logs
alias oneline='git log --oneline --graph --all --decorate'
alias gcat='cat .git/HEAD'
alias gcm='cat .git/refs/heads/master'
alias logp='git log -p'
alias lst='git ls-tree master'

#alias for updating projects
## update ALL repos
alias upal='find . -maxdepth 3 -type d -name .git -exec sh -c "cd \"{}\"/../ && pwd && git checkout master && git pull origin master && git submodule foreach git pull origin master && git status" \;'

## repo Submods
alias supa='find . -maxdepth 3 -type d -name .git submodule foreach git pull origin master'
alias sup="git submodule foreach git pull origin master"

## package install
alias ni="npm install"
alias nu="npm uninstall"
alias yi="yarn install"

#custom npm cmds
alias nr="npm run"
alias ns="nr start"
alias nd="nr dev"
alias nb="npm run build"
alias nt="nr test:watch"

#Reboots
alias rb='source ~/.zshrc'

# IP alias
alias getIp='ifconfig | grep "inet " | grep -v 127.0.0.1'

# Get OS X Software Updates, and update installed Ruby gems, Homebrew, npm, and their installed packages
alias update='sudo softwareupdate -i -a; brew update; brew upgrade; brew cleanup; npm install npm -g; npm update -g; sudo gem update --system; sudo gem update'


# Git
alias md='mkdir -p'
alias rd='rmdir -p'
alias gfa="git fetch --all"
alias gcam="git commit -a -m"
alias gb="git branch"
alias gba="git branch -a"
alias gd="git diff"
alias gst="git status"
alias gc="git clone"
alias pull="git pull"
alias push="git push"
alias gd="git diff"
alias gca="git commit -v -a"
alias gbb="git branch -b"
alias gcb="git checkout -b"
alias gchm="git checkout master"
alias log="git log"

# Functions
# =====================
c () {
 clear
}

checkVar () {
   if [ -z @ ]; then echo "var is unset"; else echo "var is set to '$@'"; fi
}

add () {
 git add "$@"
}

gch () {
  git checkout "$@"
}

pullall(){
for dir in ~/PROJECTS/*; do (cd "$dir" && git pull); done
}

gitresetpush () {
 git reset --hard HEAD~"$@"
 git push origin HEAD --force
}

gitcp () {
 git cherry-pick -n "$@"
}

gitreset (){
git reset --hard "$@"
}

alias gbd='git branch -D'

# Custom paths
alias proj='cd ~ && cd Projects'

#SERVER
alias ngrok='cd /usr/local/bin/ && ./ngrok'


# EDITOR
# export EDITOR='/Applications/Sublime\ Text.app/Contents/SharedSupport/bin/subl'
export EDITOR="code -w"
export BUNDLER_EDITOR=$EDITOR
export GIT_EDITOR="$EDITOR -w"
alias edit=$EDITOR

