// Global Configuration for PyFunc Website
const PYFUNC_CONFIG = {
    websiteVersion: '1.0.0',
    githubOrg: 'pyfunc',
    supportEmail: 'support@pyfunc.com',

    // Social Links
    socialLinks: {
        github: 'https://github.com/pyfunc',
        discord: 'https://discord.gg/pyfunc',
        twitter: 'https://twitter.com/pyfunc',
        linkedin: 'https://linkedin.com/company/pyfunc'
    },

    // Repository Configuration
    repositories: [
        {
            name: 'memfs',
            description: 'Virtual in-memory file system module compatible with OS operations.',
            topics: ['filesystem', 'storage', 'shell'],
            language: 'Python',
            url: 'https://github.com/pyfunc/memfs'
        },
        {
            name: 'PySimpleGUI',
            description: 'Create cross-platform GUI applications with incredible simplicity.',
            topics: ['gui', 'desktop', 'cross-platform'],
            language: 'Python',
            url: 'https://github.com/pyfunc/PySimpleGUI'
        },
        {
            name: 'pykeepass',
            description: 'Seamless interaction with KeePass databases (KDBX3 and KDBX4).',
            topics: ['security', 'password-manager'],
            language: 'Python',
            url: 'https://github.com/pyfunc/pykeepass'
        }
    ],

    // Contributors
    contributors: [
        {
            name: 'Main Contributor',
            role: 'Project Founder',
            avatar: 'https://via.placeholder.com/150',
            profile: 'https://github.com/pyfunc'
        }
    ]
};

// Export configuration
export default PYFUNC_CONFIG;