package com.dxc.pms.dao;



import java.util.List;

import com.dxc.pms.model.Movies;


public interface MoviesDao {
	public Movies getMovie(int movieId);
	public List<Movies> getAllMovies();
	public boolean addMovie(Movies movie);
	public boolean deleteMovie(int movieId);
	public boolean updateMovie(Movies movie);
	public boolean isMovieExists(int movieId);
	public List<Movies> searchProductbyName(String productName);
	
	
}


