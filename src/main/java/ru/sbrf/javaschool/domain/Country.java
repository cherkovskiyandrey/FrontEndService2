package ru.sbrf.javaschool.domain;

/**
 * Created by Дом on 18.12.2016.
 */
public class Country {
    private String name;
    private String description;

    public Country() {
    }

    public Country(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
