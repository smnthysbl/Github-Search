class Github {
    constructor() {
        this.client_id = '6d70ac5eca8670d9c701';
        this.client_secret = 'eb5d86690f57b3697d2159fa5e88d73fc82f48dc';
        this.repos_count = 5;
        this.repos_sort = 'create: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
        profile, 
        repos
    };
    

    }

    
}