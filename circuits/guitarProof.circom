pragma circom 2.2.0;

template GuitarProof(){

signal input serial;
signal input brand;
signal input year;

signal output commitment;

commitment <==
serial
+
brand
+
year;

}

component main =
GuitarProof();