
# Helpful Functions
# =====================

# A function to CD into the desktop from anywhere
# so you just type desktop.
# HINT: It uses the built in USER variable to know your OS X username

# USE: desktop
#      desktop subfolder
function desktop {
cd /Users/$USER/Desktop/$@
}

# A function to extract correctly any archive based on extension
# USE: extract imazip.zip
#      extract imatar.tar
function extract () {
if [ -f $1 ] ; then
    case $1 in
        *.tar.bz2)  tar xjf $1      ;;
        *.tar.gz)   tar xzf $1      ;;
        *.bz2)      bunzip2 $1      ;;
        *.rar)      rar x $1        ;;
        *.gz)       gunzip $1       ;;
        *.tar)      tar xf $1       ;;
        *.tbz2)     tar xjf $1      ;;
        *.tgz)      tar xzf $1      ;;
        *.zip)      unzip $1        ;;
        *.Z)        uncompress $1   ;;
        *)          echo "'$1' cannot be extracted via extract()" ;;
    esac
else
    echo "'$1' is not a valid file"
fi
}

# Aliases
# =====================
# Open Bash Profile
alias basho='cd ~ && open -a atom .bash_profile'
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
alias ..="cd .."
alias .2="cd ../.."
alias .3="cd ../../.."
alias .4="cd ../../../.."
alias .5="cd ../../../../.."

# alias for navigating to projects
alias lab='cd ~/projects/lab'


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
##update npm
alias ni="npm install"



alias p="cd ~/projects"

#Reboots
alias rb='source ~/.bash_profile'
alias arst='restart apachectl'



# List all files colorized in long format
alias l="ls -lF ${colorflag}"

# List all files colorized in long format, including dot files
alias la="ls -laF ${colorflag}"

# List only directories
alias lsd="ls -lF ${colorflag} | grep --color=never '^d'"

# Always use color output for `ls`
alias ls="command ls ${colorflag}"
export LS_COLORS='no=00:fi=00:di=01;34:ln=01;36:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arj=01;31:*.taz=01;31:*.lzh=01;31:*.zip=01;31:*.z=01;31:*.Z=01;31:*.gz=01;31:*.bz2=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.jpg=01;35:*.jpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.avi=01;35:*.fli=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.ogg=01;35:*.mp3=01;35:*.wav=01;35:'

# Enable aliases to be sudo’ed
alias sudo='sudo '


# Get OS X Software Updates, and update installed Ruby gems, Homebrew, npm, and their installed packages
alias update='sudo softwareupdate -i -a; brew update; brew upgrade; brew cleanup; npm install npm -g; npm update -g; sudo gem update --system; sudo gem update'


# Git
alias gst="git status"
alias gcl="git clone"
alias gp="git pull"
alias push="git push"
alias gd="git diff | atom"
alias gd="git diff"
alias gc="git commit -m"
alias gca="git commit -v -a"
alias gb="git branch"
alias gba="git branch -a"
alias gcam="git commit -am"
alias gbb="git branch -b"
alias gch="git checkout"

# Functions
# =====================
c () {
 clear
}

add () {
 git add "$@"
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

# Delete local branch
dellocal () {
git branch -D "$@"
}

# Case-Insensitive Auto Completion
bind "set completion-ignore-case on"

# RVM
# loads RVM into the shell
# This must be the last line of your bash_profile always
# [[ -s "/Users/$USER/.rvm/scripts/rvm" ]] && source "/Users/$USER/.rvm/scripts/rvm"  # This loads RVM into a shell session.
