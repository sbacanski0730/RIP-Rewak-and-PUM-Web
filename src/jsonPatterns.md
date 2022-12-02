# Endpoints Patterns

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
        localhost:9000/workers-group/:departmentsName
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
    	}
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
    	}
    ]
    ```

-   **Reszta endpointów będzie przybywać na bierząco**
