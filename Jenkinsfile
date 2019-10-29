pipeline {
    agent {
        docker {
            image 'node:10.16.0'
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
