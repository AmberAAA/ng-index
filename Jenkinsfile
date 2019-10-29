pipeline {
    agent {
        docker {
            image 'node:12'
            args '-p 10001:4200'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
    }
}
