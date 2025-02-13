// Exemplos práticos dos conceitos vistos em aula

// Exemplo de classe com construtor e métodos
public class Animal {
    private String nome;
    private int idade;
    
    // Construtor padrão
    public Animal() {
        this.nome = "Sem nome";
        this.idade = 0;
    }
    
    // Construtor parametrizado
    public Animal(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    // Exemplo de sobrecarga de método
    public void fazerSom() {
        System.out.println("Som genérico de animal");
    }
    
    public void fazerSom(String som) {
        System.out.println(nome + " faz " + som);
    }
}

// Exemplo de herança
public class Gato extends Animal {
    private String cor;
    
    public Gato(String nome, int idade, String cor) {
        super(nome, idade);
        this.cor = cor;
    }
    
    // Exemplo de sobrescrita
    @Override
    public void fazerSom() {
        System.out.println("Miau!");
    }
}

// Exemplo de composição
public class Motor {
    private String tipo;
    private int potencia;
    
    public Motor(String tipo, int potencia) {
        this.tipo = tipo;
        this.potencia = potencia;
    }
}

public class Carro {
    private String modelo;
    private Motor motor; // Composição
    
    public Carro(String modelo, String tipoMotor, int potencia) {
        this.modelo = modelo;
        this.motor = new Motor(tipoMotor, potencia); // Criando o motor ao criar o carro
    }
}

// Exemplo de uso
public class Main {
    public static void main(String[] args) {
        // Testando construtores e sobrecarga
        Animal animal1 = new Animal();
        Animal animal2 = new Animal("Rex", 5);
        
        animal1.fazerSom();
        animal2.fazerSom("Au au!");
        
        // Testando herança e sobrescrita
        Gato gato = new Gato("Mimi", 3, "Preto");
        gato.fazerSom(); // Vai imprimir "Miau!"
        
        // Testando composição
        Carro carro = new Carro("Fusca", "1.6", 1600);
    }
}