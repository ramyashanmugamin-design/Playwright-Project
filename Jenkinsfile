pipeline{
    agent any
    stages{
        stage('git clone'){
        steps {
            git branch: 'main', credentialsId: 'Git_Hub_Credentials', url: 'https://github.com/ramyashanmugamin-design/Playwright-Project.git'
        }
        }
        stage('Install Playwright'){
        steps {
            bat 'npm install'
            bat 'npx playwright install'
        }
        }
         stage('Execute test'){
        steps {
            bat 'npx playwright test --headed'
        }
        }
        stage('Generate Report') {
            steps {
             bat 'npx allure generate ./allure-results -o ./allure-report --clean'
            }
        }

        
    }
}
