pipeline {
    agent {
        docker {
            image 'node:12'
            args '-p 10011:4200'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build:prod'
            }
        }
        stage('Test') {
             steps {
                 sh 'ng test'
             }
        }
    }
}
