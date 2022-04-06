package com.github.wesleyav.apispringangularsample.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.github.wesleyav.apispringangularsample.entities.City;

@Repository
public interface CityRepository extends JpaRepository<City, Long> {

}
