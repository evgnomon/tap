FROM mcr.microsoft.com/devcontainers/javascript-node:20

# Install additional CLI tools
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
        curl \
        wget \
        unzip \
        zip \
        tree \
        htop \
        jq \
        ripgrep \
        fd-find \
        bat \
        eza \
    && apt-get autoremove -y && apt-get clean -y && rm -rf /var/lib/apt/lists/*

# Install additional Node.js global packages if needed
# RUN npm install -g <package-name>

# Set up aliases for better CLI experience
RUN echo 'alias ll="ls -alF"' >> /home/node/.bashrc \
    && echo 'alias la="ls -A"' >> /home/node/.bashrc \
    && echo 'alias l="ls -CF"' >> /home/node/.bashrc \
    && echo 'alias grep="rg"' >> /home/node/.bashrc \
    && echo 'alias find="fd"' >> /home/node/.bashrc \
    && echo 'alias cat="batcat"' >> /home/node/.bashrc

USER node