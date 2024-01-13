
pipeline {
    agent any

    environment {
        FIREBASE_TOKEN = credentials('firebase-token')
    }

    stages {

        stage('Checkout') {
            steps {
                // Clonar el repositorio
                checkout scm
            }
        }
        stage('Install and Build') {
            steps {
                // Instalar dependencias y construir la aplicación
                script {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy to Firebase') {
            steps {
                // Desplegar la aplicación en Firebase Hosting
                script {
                    sh 'npm install -g firebase-tools'
                    sh 'firebase use --add <alias>'
                    sh 'firebase deploy --token $FIREBASE_TOKEN'
                }
            }
        }
    }
}