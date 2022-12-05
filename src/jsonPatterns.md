# Endpoints Patterns

### UWAGI

    - Format daty: YYYY-MM-DD
    - Zwracamy tylko terminy, które istnieją - terminy "puste" pomijamy
    - Osobno czas rozpoczęcia i zakończenia "godziny"
    - nazwa przedmiotu w response musi być "odszyfrowana"
    - UWAGA!! - W przypadku planu sal - nie ma opcji na szukanie po całym semestrze!!!!!!
    - W przypadku planu sal - nie potrzebna informacja o typie zajęć
    - UWAGA!! - podczas "wyszukiwania sal" na harmonogramie można znaleźć dwie różne wersje wpisanych danych (profesor/"rezerwacja" + nazwa przedmiotu) lub (profesor/"rezerwacja" + kierunek + nazwa przedmiotu)

-   **Lista grup pracowników**

    **Endpoint zwraca listę grup, na które są podzieleni wszyscy pracownicy uczelni wystepujący w planie**

    Endpoint:

    ```
    localhost:9000/workers-group/
    ```

    Wzór JSON'a:

    ```json
    [
    	{
    		"name": "Wydział Nauk o Zdrowiu i Kulturze Fizycznej"
    	},
    	{
    		"name": "Wydział Nauk Technicznych i Ekonomicznych"
    	},
    	{
    		"name": "Wydział Nauk Społecznych i Humanistycznych"
    	},
    	{
    		"name": "Erazmus"
    	},
    	{
    		"name": "Wychowanie Fizyczne"
    	}
    ]
    ```

-   **Lista wszystkich pracowników będących przypisanych do danej grupy**

    **Endpoint zwraca listę pracowników przypisanych do grupy przekazanej w parametrze endpointa (:departmentsName)**

    Endpoint:

    ```
        localhost:9000/workers-group/:departmentName
    ```

    Wzór response:

    ```json
    [
    	{
    		"name": "Andrzejczyk Paweł"
    	},
    	{
    		"name": "Ardeli Magdalena"
    	},
    	{
    		"name": "Bednarz Nadine mgr"
    	},
    	{
    		"name": "Bernatek-Zaguła Izabela"
    	},
    	{
    		"name": "Bezdziecka Agnieszka"
    	},
    	{[...]}s
    ]
    ```

-   **Lista godzin dydaktycznych pracownika**

    **Endpoint z podanych w ścieżce danych wyciaga informacje o wydziale w którym znajduje sie pracownik oraz jego imię i nazwisko i na tej podstawie tych informacji zwraca listę godzin pracownika z ich danymi (jak we wzorze respons'a)**

    Endpoint:

    ```
    	/localhost:9000/workers-group/:departmentName/:workerName
    ```

    Wzór response:

    ```json
    [
    	{
    		"date": "2022-12-05",
    		"timeStart": "13:30",
    		"timeEnd": "15:00",
    		"subject": "Pk (wyk)",
    		"room": "Online_02",
    		"type": "wyk"
    	},
    	{
    		"date": "2022-12-05",
    		"timeStart": "15:15",
    		"timeEnd": "15:00",
    		"subject": "Pk (wyk)",
    		"room": "Online_02",
    		"type": "wyk"
    	},
    	{
    		"date": "2022-12-06",
    		"timeStart": "15:15",
    		"timeEnd": "16:45",
    		"subject": "P (wyk)",
    		"room": "Online_09",
    		"type": "wyk"
    	}
    	{[...]}
    ]
    ```

-   **Lista wszystkich budynków**

    **Endpoint zwraca listę wszystkich grup (budynki) na jakie są podzielone sale**

    Endpoint:

    ```
      localhost:9000/rooms/
    ```

    Wzór response:

    ```json
    [
    	{
    		"name": "Budynek A"
    	},
    	{
    		"name": "Budynek C"
    	},
    	{
    		"name": "Budynek E"
    	},
    	{
    		"name": "Budynek D"
    	},
    	{
    		"name": "Budynek DS"
    	}
    ]
    ```

-   **Lista wszystkich sal z danego budynku**

    **Endpoint zwraca listę sal jakie znajduja sie w budynku, ktorego nazwe otrzymuje w parametrach**

    Endpoint:

    ```
      localhost:9000/rooms/:buildingName
    ```

    Wzór response:

    ```json
    [
    	{
    		"name": "Budynek C"
    	},
    	{
    		"name": "Cały budynek C"
    	},
    	{
    		"name": "10"
    	},
    	{
    		"name": "11"
    	},
    	{
    		"name": "14"
    	},
    	{
    		"name": "15"
    	},
    	{
    		"name": "20"
    	},
    	{
    		"name": "021 (Kuchnia)"
    	},
    	{
    		"name": "21"
    	},
    	{[...]}
    ]
    ```

-   **Lista godzin w których odbywaja sie zajecia w danej sali**

    **Endpoint znając dane ze ścieżki (nazwę budynku oraz numer sali) zwraca listę zajęć jakie odbywają się w danej sali**

    Endpoint:

    ```
    	localhost:9000/rooms/:buildingName/:roomNumber
    ```

    Wzór response:

    ```json
    [
    	{
    		"date": "2022-12-08",
    		"timeStart": "08:15",
    		"timeEnd": "09:45",
    		"profesor":"prof. dr hab. Natalia Pobirchenko",
    		"subject": "Bezpieczeństwo wewnętrzne 1"
    	},
    	{
    		"date": "2022-12-10",
    		"timeStart": "10:00",
    		"timeEnd": "11:30",
    		"profesor":"prof. dr hab. Natalia Pobirchenko",
    		"subject": "Bezpieczeństwo wewnętrzne 1"
    	},
    	{[...]}
    ]
    ```
