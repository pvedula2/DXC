package com.dxc.pms.service;

import java.util.List;

import com.dxc.pms.model.Movies;


public interface MovieService {
	public Movies getMovie(int movieId);
	public List<Movies> getAllMovies();
	public boolean addMovie(Movies movie);
	public boolean deleteMovie(int movieId);
	public boolean updateMovie(Movies movie);
	
	
	
	public List<Movies> searchMoviebyName(String productName);

}
