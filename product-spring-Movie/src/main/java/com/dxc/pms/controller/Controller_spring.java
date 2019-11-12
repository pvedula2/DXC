package com.dxc.pms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



import com.dxc.pms.model.Movies;

import com.dxc.pms.service.MovieService;

@RestController
@RequestMapping("movies")
public class Controller_spring {
	@Autowired
	MovieService service;
	

	// Getting products
	@GetMapping("/{movieId}")
	public Movies getMovie(@PathVariable("movieId") int mId) {
		System.out.println("My path variable test 2. The Movie Id entered is " + mId);
		return service.getMovie(mId);
	}
	
	//Deleting movie
	@DeleteMapping("/{movieId}")
	public boolean deleteMovie(@PathVariable("movieId") int mId) {
		System.out.println("Deleting Movie is working");
		return service.deleteMovie(mId);
	}
	//To get all movies
	@GetMapping
	public List<Movies> getAllMovies() {
		System.out.println("Getting all movies is working");
		return service.getAllMovies();
	}

	@PostMapping()
	public boolean saveMovie(@RequestBody Movies movies) {
		System.out.println("Saving a movie is working");
		System.out.println(movies);
		return service.addMovie(movies);
	}
//	@PostMapping()
//	public boolean saveMovie() {
//		System.out.println("Saving a movie is working");
//		
//		return service.addMovie();
//	}
	//To update movie
	@PutMapping
	public boolean updateMovie(@RequestBody Movies movies) {
		System.out.println("Updating  moveie is working");
		System.out.println(movies);
		return service.updateMovie(movies);
	}

}
