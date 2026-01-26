Denne koden er React med Vite som build tool. Det er også satt opp ESLinter for å configurere prettier.
All CSS er gjort med tailwind css. Jeg burdere i starten å bruke styled components men jeg er relativt komfortabel med tailwind, samt at det er lettere å få et gjenomgående utseende med de forhåndsbestemte klassene.

Komponentene er utviklet med en atomisk design tilnærming der man begynner med små komponenter og gradvis setter flere og flere komponenter sammen til du får en side.
Komponentene er da fordelt på Atoms > Molecules > Organisms > Pages.
types.ts inneholder datatypene for de 4 entitetene systemet håndterer, og setupet på dem er likt det som var foreslått i database diagrammet i API repoen.
En liten endring som jeg gjorde her var at jeg fjernet "role" som et attribut i entiteten "User" da den attributen ble redundant data. Brukerens rolle er allerede lagret i entiteten Department_role.

All data til det som ikke er hardkodet hentes med fetch funksjoner fra php apiet som ble gitt til oss. Jeg endte opp med å lage 2 endepunkter til for å replikere datastrukturen som skulle vært i en relasjonsdatabase. Planen var egentlig å få hostet en PostgreSQL database, men etter å ha sittet noen timer med setup og feilsøking, fant jeg ut av at jeg måtte betale for å tillate IPv4 tilkoblinger da serveren som API'et kjører på ikke støtter IPv6 tilkoblinger. Alternativene mine ble da å enten selvhoste databasen, eller mocke opp dataen direkte i API'et og "late som" den dataen kommer fra en database. Jeg valgte da valg nr. 2, men gitt at jeg hadde hatt lengre tid ville nok selv hostet database vært i kortene.
Det slo meg også som en mulighet å kjøre hele apiet lokalt også men så ikke på det som hensiktsmessig, samt at da hadde jeg måttet bruke en del tid på å sette meg inn i hele apiet for å se om det i det hele tatt hadde vært mulig.
Jeg måtte også gjøre noen endringer i endepunktene da det api'et jeg fikk for det første ikke hadde åpning for utvikling fra localhost, samt ikke hadde headers ved retur av data så nettleseren endte opp med å gi meg CORS errors.
Jeg løste dette ved å legge inn en egen funksjon som gir tilgang for kall fra localhost, samt inserter headers før retur av data. Er dette en pen løsning? nei. Men fungerer det? Ja!

På grunn av måten komponetene er satt sammen, og at flere av komponentene har behov for data fra eller å kunne sette mange av de samme statene, endte jeg opp med å samle disse statene inn i min egne hook. useDepartmentData er en hook som inneholder alle states for henting av data samt manipuleringen av dem.
Her finner du funksjoner som "setUserAsLeader" som brukes for å sette setRole.
Denne funksjone, sammen med "role" variabelen til staten eksporteres slik at man kan importere den til de komponentene som skulle trenge dem. I dette tilfelle passes de ned fra Page komponenten i form av "on" funksjoner.

Det er også ganske tydelig at designet jeg har gått for i min egen løsning er litt anderledes fra det som ble sendt ut i oppgaven. Dette er fordi jeg ikke forstod hvordan data hirarkiet fungerte med det designet. Ettersom hele designet var en dropdown, betyr det at Catch Media AS skal eie all data som er i sin dropdown, men der kunne jeg finne data fra andre bedrifter. Jeg valgte derfor å splitte de opp i flere dropdowns slik at hvert firma fikk sin egen. På den måten er det tydeligere for sluttbruker hvem som eier dataen de driver å jobber med.

Søkefunksjonen var en annen ting jeg ikke helt forstod hvordan skulle fungere basert på det orginale designet, men min beste teori er at den brukes til å søke opp bedrifter i et tilfelle der listen av bedrifter er veldig lang. I min løsningen der bedriftene har sine egne dropdowns valgte jeg å implimentere søkefunksjonen på avdelingene isteden. Hver bedrift har en liste over alle avdelingene som brukeren ikke er en del av allerede. Denne listen er lagret i en state som filtreres i real-time (med en liten delay) på det som inputtes i søkefeltet.

Det sagt, så har jeg valgt å beholde en versjon av det orginale designet på skjermen, for å kunne vise til endringene jeg gjorde. Dette designet har derimot ingen funksjonalitet tilknyttet seg, og all data er hardkodet.

Over all er jeg semi fornøyd med løsningen. Jeg syntes det er et par ting jeg kunne gjort bedre. Ikke super fornøyd med løsningen min for hvordan man legger til eller fjerner en bruker som leder, samt hvordan man legger til eller fjerner en avdeling fra en bruker. Dette systemet viser også at en bruker er medlem av 4 forskjellige bedrifter, men i en korrekt sammenheng ville jeg hatt en bedrift pr. innlogget bruker, og det ville også gitt rom til å endre designet.

Jeg valgte også å ikke bygget systemet som UMD da jeg ikke har noen erfaring med dette og kun vet hva det er fordi jeg googlet det under denne oppgaven.
