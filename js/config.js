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
        // linkedin: 'https://linkedin.com/company/pyfunc'
    },

    // Repository Configuration
    repositories: [
        {
            "name": "memfs",
            "description": "Moduł memfs implementuje wirtualny system plików w pamięci. Ten moduł zapewnia interfejs zgodny z modułem os i zapewnia operacje na plikach i katalogach przechowywanych w pamięci RAM, a nie na dysku.",
            "topics": ["filesystem", "storage", "shell", "cli", "memfs", "virual"],
            "language": "Python",
            "url": "https://github.com/pyfunc/memfs",
            "license": "Apache License 2.0"
        },
        {
            "name": "PySimpleGUI",
            "description": "Launched in 2018. It's 2023 and PySimpleGUI is actively developed & supported. Create complex windows simply. Supports tkinter, Qt, WxPython, Remi (in browser). Create GUI applications trivially with a full set of widgets. Multi-Window applications are also simple. 3.4 to 3.11 supported. 325+ Demo programs & Cookbook for rapid start. Extensive docs",
            "topics": ["gui"],
            "language": "Python",
            "url": "https://github.com/pyfunc/PySimpleGUI",
            "license": "GNU Lesser General Public License v3.0"
        },
        {
            "name": "pykeepass",
            "description": "Python library to interact with keepass databases (supports KDBX3 and KDBX4)",
            "topics": ["security", "password-manager"],
            "language": "Python",
            "url": "https://github.com/pyfunc/pykeepass",
            "license": "GNU General Public License v3.0"
        },
        {
            "name": "passhole",
            "description": "A secure hole for your passwords (KeePass CLI)",
            "topics": ["security", "password-manager", "cli"],
            "language": "Python",
            "url": "https://github.com/pyfunc/passhole",
            "license": "GNU General Public License v3.0"
        },
        {
            "name": "lib",
            "description": "all libs for cameramonit, cfo, ... projects",
            "topics": ["docker", "ocr", "templates", "pydock", "pyfunc"],
            "language": "Python",
            "url": "https://github.com/pyfunc/lib",
            "license": "Apache License 2.0"
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