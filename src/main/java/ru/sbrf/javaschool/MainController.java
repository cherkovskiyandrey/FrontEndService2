package ru.sbrf.javaschool;


import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.sbrf.javaschool.domain.Country;
import ru.sbrf.javaschool.domain.Profile;

import java.util.Arrays;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;
import java.util.concurrent.TimeUnit;

@RestController
public class MainController {

    private final ConcurrentMap<String, Profile> users = new ConcurrentHashMap<>();

    public MainController() {
        this.users.put("andrey", new Profile());
    }

    @RequestMapping(path = "/country/test", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    public List<Country> getCountries() throws InterruptedException {
        TimeUnit.SECONDS.sleep(5);
        return Arrays.asList(
                new Country("rus","Россия"),
                new Country("bel","Белоруссия"),
                new Country("kz","Казахстан"),
                new Country("uz", "Узбекистан"),
                new Country("ua","Украина")
        );
    }

    @RequestMapping(path = "/users/check/login", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    @ResponseBody
    public List<String> checkLogin(@RequestParam(value = "login", required = true) String login) {
        if(!users.containsKey(login)) {
            return Collections.emptyList();
        }
        final List<String> supposedLogins = new LinkedList<>();
        for(int i = 1; i < Integer.MAX_VALUE; ++i) {
            final String l = login + i;
            if(!users.containsKey(l)) {
                supposedLogins.add(l);
                if(supposedLogins.size() == 5) {
                    break;
                }
            }
        }
        return supposedLogins;
    }
}
