package com.dxc.pms.dao;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Repository;

import com.dxc.pms.model.Movies;
import com.mongodb.WriteResult;



@Repository
public class MoviesDaoImpl implements MoviesDao {
	@Autowired
	MongoTemplate mongoTemplate;
	@Override
	public Movies getMovie(int movieId) {
		System.out.println("Movie has reached and we gonna get it soon for you");
		
		return mongoTemplate.findById(movieId, Movies.class, "movies");
		
	}

	@Override
	public List<Movies> getAllMovies() {
		System.out.println("To print all movies from dao");
		
		return mongoTemplate.findAll(Movies.class, "movies");
		
	}
//	@Override
//	public Movies addMovie() {
////		mongoTemplate.save(movie);
//		Movies movies=new Movies(101, "Avengers", 10000, "Dont Remember");
//		
//		System.out.println("Your movie has been saved successfully");
//		return movies;
//		
//	}

	@Override
	public boolean addMovie(Movies movie) {
		
		
		mongoTemplate.save(movie);
		System.out.println("Your movie has been saved successfully");
		return true;
		
		
		
	}

	@Override
	public boolean deleteMovie(int movieId) {
		Movies object=new Movies();
		object.setMovieId(movieId);
		WriteResult result=mongoTemplate.remove(object);
		int rowsAffected=result.getN();
		if(rowsAffected==0) {
			System.out.println("No movie with this movieId has been found");
			return false;}
		
		else {
			System.out.println("Movie successfully deleted");
			return true;}
		
		
	}

	@Override
	public boolean updateMovie(Movies newmovie) {
		if(isMovieExists(newmovie.getMovieId())) {
		mongoTemplate.save(newmovie);
		return true;}
		else {
			System.out.println("movie id doesnt exist");
			return false;
		}
		
	

	}

	@Override
	public boolean isMovieExists(int movieId) {
		Movies movies=mongoTemplate.findById(movieId, Movies.class, "movies");
		System.out.println(movies);
		if(movies==null)
		return false;
		else
			return true;
		// TODO Auto-generated method stub
	
		
		
		
	}

	@Override
	public List<Movies> searchProductbyName(String productName) {
		// TODO Auto-generated method stub
		return null;
	}

	
	
	}


