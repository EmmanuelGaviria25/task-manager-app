
pipeline {
    agent any

    stages {
        stage('Instalar dependencias') {
            steps {
                script {
                    // Ejecutar comandos para instalar dependencias
                    sh 'npm install'
                }
            }
        }

        stage('Construir la aplicación') {
            steps {
                script {
                    // Ejecutar comandos para construir la aplicación
                    sh 'npm run build'
                }
            }
        }

        // Agrega más etapas según sea necesario
    }

    post {
        always {
            // Puedes agregar acciones adicionales después de las etapas
        }
    }
}