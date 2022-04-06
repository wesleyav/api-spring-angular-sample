package com.github.wesleyav.apispringangularsample.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.wesleyav.apispringangularsample.entities.City;
import com.github.wesleyav.apispringangularsample.repositories.CityRepository;

@Service
public class CityService {

	@Autowired
	private CityRepository cityRepository;

	public List<City> findAll() {
		return cityRepository.findAll();
	}

	public City findById(Long city_id) {
		return cityRepository.findById(city_id).orElse(null);
	}
}
