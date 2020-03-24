/* Nomor 1
STORE 'massa'
STORE 'percepatan benda'
COMPUTE 'resultan gaya' as 'massa' divide 'percepatan benda'
DISPLAY 'resultan gaya'
*/

m = 600
a = 2
console.log(f = m * a)

/* Nomor 2
READ X AS TAHUN
STORE X
IF X Modulus 4 EQUAL to 0 AND
IF X Modulus 4 NOT EQUAL to 0
THEN "Tahun Kabisat."
ELSE
IF X Modulus 4 EQUAL to 0 AND
IF X Modulus 100 EQUAL to 0
IF X Modulus 400 EQUAL to 0
THEN "Tahun Kabisat."
ELSE
"Bukan Tahun Kabisat"
ENDIF
*/
let x = 2020;
if (x % 4 == 0 && x % 100 != 0) {
  console.log('Tahun Kabisat.')
} else
if (x % 4 == 0 && x % 100 == 0 && x % 400 == 0) {
  console.log('Tahun Kabisat.')
} else {
  console.log('Bukan Tahun Kabisat.')
}

/* Nomor 3
STORE I WITH VALUE 1
WHILE 1 LESS THAN OR EQUAL TO 20
DISPLAY PAKAIAN FIXIE KE-
ENDWHILE
*/
let i= 1;
while (i <= 20) 
{
  console.log('Pakaian Foxie ke-' + i)
  i++;
}

/* Nomor 4
STORE MURID WITH VALUE 40
STORE KUKUPANJANG WITH VALUE 10
STORE KUKUPANJANG WITH VALUE 30
WHILE I  LESSER THAN MURID
DISPLAY MURID WITH KUKU PENDEK
DISPLAY MURID WITH KUKU PANJANG
*/

var murid = 40;
var kukupanjang = 10;
var kukupendek = 30;
var proses = 1;
for (proses = 1; proses <= murid; proses++)
{
    if (proses == kukupanjang || proses == kukupendek) {
        console.log(proses + 'Di Hukum')
    }
    else {
        console.log(proses + ' Di Puji')
    }
}

