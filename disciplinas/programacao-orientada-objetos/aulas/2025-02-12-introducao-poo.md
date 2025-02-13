# 12/02/2025 - Introdução à POO em Java

## Objetivos
- Compreender os conceitos fundamentais da Programação Orientada a Objetos
- Aprender sobre classes, objetos e métodos em Java
- Entender a diferença entre sobrecarga e sobrescrita
- Explorar conceitos de herança e composição

## Conteúdo

### 1. Conceitos Fundamentais de POO

A Programação Orientada a Objetos é um paradigma que organiza o código em torno de objetos, que são instâncias de classes. Os pilares fundamentais são:

- **Encapsulamento:** Protege os dados dentro de um objeto
- **Herança:** Permite reutilização de código entre classes
- **Polimorfismo:** Permite tratar objetos de diferentes classes de forma uniforme
- **Abstração:** Simplifica complexidade escondendo detalhes desnecessários

### 2. Classes e Objetos em Java

```java
public class Animal {
    // Atributos
    private String nome;
    private int idade;
    
    // Construtor
    public Animal(String nome, int idade) {
        this.nome = nome;
        this.idade = idade;
    }
    
    // Métodos
    public void fazerSom() {
        System.out.println("Som genérico de animal");
    }
}
```

### 3. Sobrecarga vs Sobrescrita

#### Sobrecarga (Overloading)
```java
public class Calculadora {
    // Sobrecarga de métodos
    public int somar(int a, int b) {
        return a + b;
    }
    
    public double somar(double a, double b) {
        return a + b;
    }
}
```

#### Sobrescrita (Overriding)
```java
public class Gato extends Animal {
    @Override
    public void fazerSom() {
        System.out.println("Miau!");
    }
}
```

### 4. Herança vs Composição

#### Herança
```java
public class Carro extends Veiculo {
    private String modelo;
    
    public Carro(String marca, String modelo) {
        super(marca);
        this.modelo = modelo;
    }
}
```

#### Composição
```java
public class Carro {
    private Motor motor;
    private String modelo;
    
    public Carro(String modelo, String tipoMotor) {
        this.modelo = modelo;
        this.motor = new Motor(tipoMotor);
    }
}
```

## Exercícios

1. Crie uma classe `Pessoa` com atributos nome e idade, e métodos para acessar e modificar esses atributos.

2. Implemente uma hierarquia de classes com `Animal` como superclasse e `Cachorro` e `Gato` como subclasses.

3. Demonstre o uso de sobrecarga criando múltiplos construtores para uma classe `Produto`.

4. Crie um exemplo de composição usando as classes `Computador` e `Processador`.

## Recursos Adicionais

- [Java Documentation - Oracle](https://docs.oracle.com/javase/tutorial/java/concepts/)
- [W3Schools Java Tutorial](https://www.w3schools.com/java/)
- IDE Recomendada: IntelliJ IDEA ou Eclipse

## Próxima Aula
- Aprofundamento em Herança e Polimorfismo
- Interfaces e Classes Abstratas
- Exercícios Práticos