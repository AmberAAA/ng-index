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
            }
        }
        stage('Test') {
             steps {
                 sh 'npm run build'
             }
        }
    }
}
x
