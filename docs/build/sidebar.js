module.exports = [
    {
        title: '打包与构建',
        collapsable: true,
        children: [
            {
                title: 'webpack',
                collapsable: true,
                children: [{
                    title: '核心概念',
                    path: '/build/webpack5/core-concept',
                    collapsable: true
                },
                {
                    title: '基本配置',
                    path: '/build/webpack5/basic-config',
                    collapsable: true
                },
                {
                    title: '高级配置',
                    path: '/build/webpack5/advanced-config',
                    collapsable: true
                },
                {
                    title: '性能优化 - 构建速度',
                    path: '/build/webpack5/performance-optimization-in-build',
                    collapsable: true
                },
                {
                    title: '性能优化 - 产出代码',
                    path: '/build/webpack5/performance-optimization-in-output',
                    collapsable: true
                },
                {
                    title: '最佳实践 - 通用模板',
                    path: '/build/webpack5/generic-template',
                    collapsable: true
                }]
            }
        ]
    },
    {
        title: '源码管理',
        collapsable: true,
        children: [{
            title: 'Git 知识整理',
            collapsable: false,
            children: [
                {
                    title: '常用命令清单',
                    path: '/build/git/common-command-manual',
                    collapsable: true
                },
                {
                    title: '配置密钥实现免密操作',
                    path: '/build/git/add-ssh-key',
                    collapsable: true
                },
                {
                    title: 'git rebase 的两种用法',
                    path: '/build/git/git-rebase',
                    collapsable: true
                }
            ]
        },
        {
            title: 'Git 常见问题',
            collapsable: false,
            children: [
                {
                    title: 'clone 速度过慢影响效率',
                    path: '/build/git/solution-to-clone-too-slow',
                    collapsable: true
                },
                {
                    title: 'commit 信息写错想要修改',
                    path: '/build/git/solution-to-commit-info-mistake',
                    collapsable: true
                },
                {
                    title: '刚刚 commit 的代码，发现写错了',
                    path: '/build/git/solution-to-last-commit-code-mistake',
                    collapsable: true
                },
                {
                    title: '刚刚 commit，发现漏提交了文件',
                    path: '/build/git/solution-to-missed-file-in-last-commit',
                    collapsable: true
                },
                {
                    title: '刚刚的 commit 有误，想要撤回',
                    path: '/build/git/solution-to-withdraw-last-commit',
                    collapsable: true
                },
                {
                    title: '刚刚的 push 有误，想要撤回',
                    path: '/build/git/solution-to-withdraw-last-push',
                    collapsable: true
                },
                {
                    title: 'pull 时发现代码冲突，如何妥善解决',
                    path: '/build/git/solution-to-code-conflict',
                    collapsable: true
                },
                {
                    title: '如何修改历史 commits 中的用户名和邮箱',
                    path: '/build/git/solution-to-change-name-and-email-in-history-commits',
                    collapsable: true
                },
                {
                    title: '如何迁移仓库并保留 commits 记录',
                    path: '/build/git/solution-to-migrate-repository-without-losing-history-commits',
                    collapsable: true
                },
                {
                    title: '如何参与开源项目 - 提交 PR 与更新 Fork 分支',
                    path: '/build/git/solution-to-participate-in-open-source-projects',
                    collapsable: true
                }
            ]
        }]
    },
    {
        title: '自动化构建',
        collapsable: true,
        children: [
            {
                title: '安装向导',
                collapsable: true,
                path: '/build/jenkins/install'
            },
            {
                title: '全局配置',
                collapsable: true,
                path: '/build/jenkins/global-configure'
            },
            {
                title: '创建一个项目',
                collapsable: true,
                path: '/build/jenkins/demo'
            }
        ]
    },
    {
        title: '服务部署',
        collapsable: true,
        children: [
            {
                title: '容器安装向导',
                collapsable: true,
                path: '/build/deploy/install'
            },
            {
                title: 'nginx安装与配置',
                collapsable: true,
                path: '/build/deploy/nginx'
            }
        ]
    }
]
